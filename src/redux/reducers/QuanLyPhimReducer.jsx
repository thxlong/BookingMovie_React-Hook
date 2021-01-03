import { GET_DATA_FILM } from "../const/QuanLyPhimConst";

const stateDefault = {
  mangPhim: [], //mảng phim sẽ chứa dữ liệu phim từ API trả về
  thongTinPhongVe: {},
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_DATA_FILM: {
      return { ...state, mangPhim: action.dataFilm };
    }
  }
  return { ...state };
};
