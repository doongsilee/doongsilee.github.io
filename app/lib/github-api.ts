// GitHub API service for fetching commit data using GraphQL

export interface WeeklyCommits {
    year: number;
    weeks: number[]; // 52 weeks per year, value = commit count
}

export interface CommitData {
    years: WeeklyCommits[];
    totalCommits: number;
}

interface GitHubContributionDay {
    contributionCount: number;
    date: string;
}

interface GitHubWeek {
    contributionDays: GitHubContributionDay[];
}

interface GitHubContributionCalendar {
    weeks: GitHubWeek[];
}

/**
 * Fetch GitHub commit data from 2017 onwards using GraphQL API
 * @param username - GitHub username
 * @returns Commit data aggregated by year and week
 */
export async function fetchGitHubCommits(username: string): Promise<CommitData> {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN;

    if (!token) {
        console.warn('GitHub token not found, using mock data');
        return generateMockData();
    }

    try {
        const currentYear = new Date().getFullYear();
        const allYearsData: WeeklyCommits[] = [];

        // Fetch data for each year from 2017 to current
        for (let year = 2017; year <= currentYear; year++) {
            const from = `${year}-01-01T00:00:00Z`;
            const to = year === currentYear
                ? new Date().toISOString()
                : `${year}-12-31T23:59:59Z`;

            const query = `
        query($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `;

            const response = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query,
                    variables: { username, from, to },
                }),
            });

            if (!response.ok) {
                throw new Error(`GitHub API error: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.errors) {
                throw new Error(`GraphQL error: ${JSON.stringify(data.errors)}`);
            }

            const calendar: GitHubContributionCalendar =
                data.data?.user?.contributionsCollection?.contributionCalendar;

            if (!calendar) {
                throw new Error('No contribution data found');
            }

            // Aggregate commits by week
            const weeklyCommits = calendar.weeks.map(week =>
                week.contributionDays.reduce((sum, day) => sum + day.contributionCount, 0)
            );

            allYearsData.push({
                year,
                weeks: weeklyCommits,
            });
        }

        const totalCommits = allYearsData.reduce(
            (sum, yearData) => sum + yearData.weeks.reduce((a, b) => a + b, 0),
            0
        );

        return { years: allYearsData, totalCommits };
    } catch (error) {
        console.error('Error fetching GitHub data:', error);
        // Fallback to mock data on error
        return generateMockData();
    }
}

/**
 * Generate mock data for demonstration or fallback
 */
function generateMockData(): CommitData {
    const currentYear = new Date().getFullYear();
    const startYear = 2017;
    const years: WeeklyCommits[] = [];

    for (let year = startYear; year <= currentYear; year++) {
        const weeks: number[] = [];
        const weeksInYear = year === currentYear ? getCurrentWeek() : 52;

        for (let week = 0; week < weeksInYear; week++) {
            const baseCommits = Math.floor(Math.random() * 30);
            const yearFactor = (year - startYear + 1) / (currentYear - startYear + 1);
            const commits = Math.floor(baseCommits * yearFactor);
            weeks.push(commits);
        }

        years.push({ year, weeks });
    }

    const totalCommits = years.reduce(
        (sum, yearData) => sum + yearData.weeks.reduce((a, b) => a + b, 0),
        0
    );

    return { years, totalCommits };
}

function getCurrentWeek(): number {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 1);
    const diff = now.getTime() - start.getTime();
    const oneWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.floor(diff / oneWeek);
}

/**
 * Get color intensity based on commit count
 * @param commits - Number of commits
 * @param maxCommits - Maximum commits in dataset
 * @returns Opacity value (0-1)
 */
export function getCommitIntensity(commits: number, maxCommits: number): number {
    if (commits === 0) return 0.15;
    // Increased minimum from 0.2 to 0.4 and boosted the curve for darker colors
    const normalized = commits / maxCommits;
    return 0.4 + (normalized * 0.6);
}
