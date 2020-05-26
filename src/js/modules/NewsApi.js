export class NewsApi {
  constructor(apiUrl, date) {
    this.apiUrl = apiUrl;
    this.date = date;
  }

  async getNews(words) {
    try {
      const res = await fetch(
        `${this.apiUrl.url}q=${words}&from=${this.date.apiFormateFrom(7)}&to=${this.date.apiFormateTo()}&pageSize=100&sortBy=publishedAt&language=ru&apiKey=${this.apiUrl.api}`,
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
