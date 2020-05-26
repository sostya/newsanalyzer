export class GitHubApi {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async getCommits() {
    try {
      const res = await fetch(
        "https://api.github.com/repos/sostya/newsanalyzer/commits",
        {
          method: "GET",
        }
      );
      if (!res.ok) return;
      const data = await res.json();
      return data;
    } catch (error) {
      throw new Error(`Ошибка при запросе к серверу`);
    }
  }
}
