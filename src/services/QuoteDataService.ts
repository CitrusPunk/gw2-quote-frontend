import http from "@/http-common";
class QuoteDataService {
  getAll(): Promise<any> {
    return http.get("/quotes");
  }
  get(id: any): Promise<any> {
    return http.get(`/quotes/${id}`);
  }
  create(data: any): Promise<any> {
    return http.post("/quotes", data);
  }
  update(id: any, data: any): Promise<any> {
    return http.put(`/quotes/${id}`, data);
  }
  delete(id: any): Promise<any> {
    return http.delete(`/quotes/${id}`);
  }
  deleteAll(): Promise<any> {
    return http.delete(`/quotes`);
  }
  findByTitle(title: string): Promise<any> {
    return http.get(`/quotes?title=${title}`);
  }
}
export default new QuoteDataService();
