import type { Movie } from "./movie.types";

// 사용한 api 응답구조 그대로 받아오는 녀석 > 그대로 작성
export interface ApiResponse{
    results: Movie[];
    total_results: number;
    page: number;
    total_pages: number;
}

export interface ApiError{
    status_message: string;
    status_code: number;
}