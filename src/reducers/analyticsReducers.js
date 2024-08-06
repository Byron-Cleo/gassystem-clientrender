import {
  TOP_TEN_3KG_CUSTOMERS_REQUEST,
  TOP_TEN_3KG_CUSTOMERS_SUCCESS,
  TOP_TEN_3KG_CUSTOMERS_FAIL,
  TOP_TEN_6KG_CUSTOMERS_REQUEST,
  TOP_TEN_6KG_CUSTOMERS_SUCCESS,
  TOP_TEN_6KG_CUSTOMERS_FAIL,
  TOP_TEN_13KG_CUSTOMERS_REQUEST,
  TOP_TEN_13KG_CUSTOMERS_SUCCESS,
  TOP_TEN_13KG_CUSTOMERS_FAIL,
  TOP_TEN_25KG_CUSTOMERS_REQUEST,
  TOP_TEN_25KG_CUSTOMERS_SUCCESS,
  TOP_TEN_25KG_CUSTOMERS_FAIL,
  TOP_TEN_35KG_CUSTOMERS_REQUEST,
  TOP_TEN_35KG_CUSTOMERS_SUCCESS,
  TOP_TEN_35KG_CUSTOMERS_FAIL,
  TOP_TEN_50KG_CUSTOMERS_REQUEST,
  TOP_TEN_50KG_CUSTOMERS_SUCCESS,
  TOP_TEN_50KG_CUSTOMERS_FAIL,
  ///////
  TOP_SOLD_GAS_REQUEST,
  TOP_SOLD_GAS_SUCCESS,
  TOP_SOLD_GAS_FAIL,
  GAS_FOR_3KG_REFILL_REQUEST,
  GAS_FOR_3KG_REFILL_SUCCESS,
  GAS_FOR_3KG_REFILL_FAIL,
  GAS_FOR_6KG_REFILL_REQUEST,
  GAS_FOR_6KG_REFILL_SUCCESS,
  GAS_FOR_6KG_REFILL_FAIL,
  GAS_FOR_13KG_REFILL_REQUEST,
  GAS_FOR_13KG_REFILL_SUCCESS,
  GAS_FOR_13KG_REFILL_FAIL,
  GAS_FOR_25KG_REFILL_REQUEST,
  GAS_FOR_25KG_REFILL_SUCCESS,
  GAS_FOR_25KG_REFILL_FAIL,
  GAS_FOR_35KG_REFILL_REQUEST,
  GAS_FOR_35KG_REFILL_SUCCESS,
  GAS_FOR_35KG_REFILL_FAIL,
  GAS_FOR_50KG_REFILL_REQUEST,
  GAS_FOR_50KG_REFILL_SUCCESS,
  GAS_FOR_50KG_REFILL_FAIL,
  GAS_MONTH_REVENUE_REQUEST,
  GAS_MONTH_REVENUE_SUCCESS,
  GAS_MONTH_REVENUE_FAIL,
  GAS_3KG_MONTH_REVENUE_REQUEST,
  GAS_3KG_MONTH_REVENUE_SUCCESS,
  GAS_3KG_MONTH_REVENUE_FAIL,
  GAS_6KG_MONTH_REVENUE_REQUEST,
  GAS_6KG_MONTH_REVENUE_SUCCESS,
  GAS_6KG_MONTH_REVENUE_FAIL,
  GAS_13KG_MONTH_REVENUE_REQUEST,
  GAS_13KG_MONTH_REVENUE_SUCCESS,
  GAS_13KG_MONTH_REVENUE_FAIL,
  GAS_25KG_MONTH_REVENUE_REQUEST,
  GAS_25KG_MONTH_REVENUE_SUCCESS,
  GAS_25KG_MONTH_REVENUE_FAIL,
  GAS_35KG_MONTH_REVENUE_REQUEST,
  GAS_35KG_MONTH_REVENUE_SUCCESS,
  GAS_35KG_MONTH_REVENUE_FAIL,
  GAS_50KG_MONTH_REVENUE_REQUEST,
  GAS_50KG_MONTH_REVENUE_SUCCESS,
  GAS_50KG_MONTH_REVENUE_FAIL,
} from '../constants/analyticsContants';

export const topTen3KgCustomersListReducer = (
  state = { topTen3KgCustomers: [] },
  action
) => {
  switch (action.type) {
    case TOP_TEN_3KG_CUSTOMERS_REQUEST:
      return { loading: true, topTen3KgCustomers: [] };
    case TOP_TEN_3KG_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        topTen3KgCustomers: action.payload,
      };
    case TOP_TEN_3KG_CUSTOMERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const topTen6KgCustomersListReducer = (
  state = { topTen6KgCustomers: [] },
  action
) => {
  switch (action.type) {
    case TOP_TEN_6KG_CUSTOMERS_REQUEST:
      return { loading: true, topTen6KgCustomers: [] };
    case TOP_TEN_6KG_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        topTen6KgCustomers: action.payload,
      };
    case TOP_TEN_6KG_CUSTOMERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const topTen13KgCustomersListReducer = (
  state = { topTen13KgCustomers: [] },
  action
) => {
  switch (action.type) {
    case TOP_TEN_13KG_CUSTOMERS_REQUEST:
      return { loading: true, topTen13KgCustomers: [] };
    case TOP_TEN_13KG_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        topTen13KgCustomers: action.payload,
      };
    case TOP_TEN_13KG_CUSTOMERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const topTen25KgCustomersListReducer = (
  state = { topTen25KgCustomers: [] },
  action
) => {
  switch (action.type) {
    case TOP_TEN_25KG_CUSTOMERS_REQUEST:
      return { loading: true, topTen25KgCustomers: [] };
    case TOP_TEN_25KG_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        topTen25KgCustomers: action.payload,
      };
    case TOP_TEN_25KG_CUSTOMERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const topTen35KgCustomersListReducer = (
  state = { topTen35KgCustomers: [] },
  action
) => {
  switch (action.type) {
    case TOP_TEN_35KG_CUSTOMERS_REQUEST:
      return { loading: true, topTen35KgCustomers: [] };
    case TOP_TEN_35KG_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        topTen35KgCustomers: action.payload,
      };
    case TOP_TEN_35KG_CUSTOMERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const topTen50KgCustomersListReducer = (
  state = { topTen50KgCustomers: [] },
  action
) => {
  switch (action.type) {
    case TOP_TEN_50KG_CUSTOMERS_REQUEST:
      return { loading: true, topTen50KgCustomers: [] };
    case TOP_TEN_50KG_CUSTOMERS_SUCCESS:
      return {
        loading: false,
        topTen50KgCustomers: action.payload,
      };
    case TOP_TEN_50KG_CUSTOMERS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const topSoldGasListReducer = (state = { topSoldGas: [] }, action) => {
  switch (action.type) {
    case TOP_SOLD_GAS_REQUEST:
      return { loading: true, topSoldGas: [] };
    case TOP_SOLD_GAS_SUCCESS:
      return {
        loading: false,
        topSoldGas: action.payload,
      };
    case TOP_SOLD_GAS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gasFor3KgRefillListReducer = (
  state = { gasFor3KgRefill: [] },
  action
) => {
  switch (action.type) {
    case GAS_FOR_3KG_REFILL_REQUEST:
      return { loading: true, gasFor3KgRefill: [] };
    case GAS_FOR_3KG_REFILL_SUCCESS:
      return {
        loading: false,
        gasFor3KgRefill: action.payload,
      };
    case GAS_FOR_3KG_REFILL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gasFor6KgRefillListReducer = (
  state = { gasFor6KgRefill: [] },
  action
) => {
  switch (action.type) {
    case GAS_FOR_6KG_REFILL_REQUEST:
      return { loading: true, gasFor6KgRefill: [] };
    case GAS_FOR_6KG_REFILL_SUCCESS:
      return {
        loading: false,
        gasFor6KgRefill: action.payload,
      };
    case GAS_FOR_6KG_REFILL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gasFor13KgRefillListReducer = (
  state = { gasFor13KgRefill: [] },
  action
) => {
  switch (action.type) {
    case GAS_FOR_13KG_REFILL_REQUEST:
      return { loading: true, gasFor13KgRefill: [] };
    case GAS_FOR_13KG_REFILL_SUCCESS:
      return {
        loading: false,
        gasFor13KgRefill: action.payload,
      };
    case GAS_FOR_13KG_REFILL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gasFor25KgRefillListReducer = (
  state = { gasFor25KgRefill: [] },
  action
) => {
  switch (action.type) {
    case GAS_FOR_25KG_REFILL_REQUEST:
      return { loading: true, gasFor25KgRefill: [] };
    case GAS_FOR_25KG_REFILL_SUCCESS:
      return {
        loading: false,
        gasFor25KgRefill: action.payload,
      };
    case GAS_FOR_25KG_REFILL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gasFor35KgRefillListReducer = (
  state = { gasFor35KgRefill: [] },
  action
) => {
  switch (action.type) {
    case GAS_FOR_35KG_REFILL_REQUEST:
      return { loading: true, gasFor35KgRefill: [] };
    case GAS_FOR_35KG_REFILL_SUCCESS:
      return {
        loading: false,
        gasFor35KgRefill: action.payload,
      };
    case GAS_FOR_35KG_REFILL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gasFor50KgRefillListReducer = (
  state = { gasFor50KgRefill: [] },
  action
) => {
  switch (action.type) {
    case GAS_FOR_50KG_REFILL_REQUEST:
      return { loading: true, gasFor50KgRefill: [] };
    case GAS_FOR_50KG_REFILL_SUCCESS:
      return {
        loading: false,
        gasFor50KgRefill: action.payload,
      };
    case GAS_FOR_50KG_REFILL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gas3KgMonthRevenueListReducer = (
  state = { month3KgRevenues: [] },
  action
) => {
  switch (action.type) {
    case GAS_3KG_MONTH_REVENUE_REQUEST:
      return { loading: true, month3KgRevenues: [] };
    case GAS_3KG_MONTH_REVENUE_SUCCESS:
      return {
        loading: false,
        month3KgRevenues: action.payload,
      };
    case GAS_3KG_MONTH_REVENUE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gas6KgMonthRevenueListReducer = (
  state = { month6KgRevenues: [] },
  action
) => {
  switch (action.type) {
    case GAS_6KG_MONTH_REVENUE_REQUEST:
      return { loading: true, month6KgRevenues: [] };
    case GAS_6KG_MONTH_REVENUE_SUCCESS:
      return {
        loading: false,
        month6KgRevenues: action.payload,
      };
    case GAS_6KG_MONTH_REVENUE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gas13KgMonthRevenueListReducer = (
  state = { month13KgRevenues: [] },
  action
) => {
  switch (action.type) {
    case GAS_13KG_MONTH_REVENUE_REQUEST:
      return { loading: true, month13KgRevenues: [] };
    case GAS_13KG_MONTH_REVENUE_SUCCESS:
      return {
        loading: false,
        month13KgRevenues: action.payload,
      };
    case GAS_13KG_MONTH_REVENUE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gas25KgMonthRevenueListReducer = (
  state = { month25KgRevenues: [] },
  action
) => {
  switch (action.type) {
    case GAS_25KG_MONTH_REVENUE_REQUEST:
      return { loading: true, month25KgRevenues: [] };
    case GAS_25KG_MONTH_REVENUE_SUCCESS:
      return {
        loading: false,
        month25KgRevenues: action.payload,
      };
    case GAS_25KG_MONTH_REVENUE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gas35KgMonthRevenueListReducer = (
  state = { month35KgRevenues: [] },
  action
) => {
  switch (action.type) {
    case GAS_35KG_MONTH_REVENUE_REQUEST:
      return { loading: true, month35KgRevenues: [] };
    case GAS_35KG_MONTH_REVENUE_SUCCESS:
      return {
        loading: false,
        month35KgRevenues: action.payload,
      };
    case GAS_35KG_MONTH_REVENUE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const gas50KgMonthRevenueListReducer = (
  state = { month50KgRevenues: [] },
  action
) => {
  switch (action.type) {
    case GAS_50KG_MONTH_REVENUE_REQUEST:
      return { loading: true, month50KgRevenues: [] };
    case GAS_50KG_MONTH_REVENUE_SUCCESS:
      return {
        loading: false,
        month50KgRevenues: action.payload,
      };
    case GAS_50KG_MONTH_REVENUE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
