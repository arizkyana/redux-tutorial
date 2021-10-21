import { useDispatch, useSelector } from 'react-redux';
import CampaignRepository from '@/libraries/repositories/campaign';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  categories: [], // list category
  campaigns: [], // data
  category: '', // [Pandemi, Pendidikan, Bencana Alam] -> category_id
  limit: 10, // pagination
  offset: 0, // pagination
};

const slices = createSlice({
  initialState,
  name: 'Campaign',
  reducers: {
    fetchDataCampaigns(state, action) {
      Object.assign(state, {
        ...state,
        campaigns: action.payload, // -> mendapatkan data dari API Campaign
      });
    },
    fetchDataCategories(state, action) {
      Object.assign(state, {
        ...state,
        categories: action.payload, // -> mendapatkan data dari API Categories
      });
    },
    filterCategory(state, action) {
      Object.assign(state, {
        ...state,
        category: action.payload, // -> mendapatkan data dari komponen select (headless ui)
      });
    },
    paging(state, action) {
      const { limit, offset } = action.payload;
      Object.assign(state, {
        ...state,
        limit,
        offset,
      });
    },
  },
});

export const {
  fetchDataCampaigns,
  fetchDataCategories,
  filterCategory,
  paging,
} = slices.actions;

export const useCampaignDispatch = () => {
  const { campaign } = useSelector((state) => state);
  const dispatch = useDispatch();

  const doFetchDataCampaign = async (limit) => {
    dispatch(toggleLoading(true));
    try {
      const data = await CampaignRepository.getData(limit);
      dispatch(fetchDataCampaigns(data));
    } catch (error) {
      Promise.error(error);
      dispatch(fetchDataCampaigns([]));
    }
  };

  return {
    campaign,
    doFetchDataCampaign,
  };
};

export default slices.reducer;
