import axios from 'axios';
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
  /////////////
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

//READ TOP CUSTOMERS OPERATION(Read-LIST)
export const listTopTen3KGMonthlyCustomers =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: TOP_TEN_3KG_CUSTOMERS_REQUEST,
      });

      const { data } = await axios.get(
        '/api/v1/analytics/top-ten-3kg-customers'
      );

      dispatch({
        type: TOP_TEN_3KG_CUSTOMERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOP_TEN_3KG_CUSTOMERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopTen6KGMonthlyCustomers =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: TOP_TEN_6KG_CUSTOMERS_REQUEST,
      });

      const { data } = await axios.get(
        '/api/v1/analytics/top-ten-6kg-customers'
      );

      dispatch({
        type: TOP_TEN_6KG_CUSTOMERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOP_TEN_6KG_CUSTOMERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopTen13KGMonthlyCustomers =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: TOP_TEN_13KG_CUSTOMERS_REQUEST,
      });

      const { data } = await axios.get(
        '/api/v1/analytics/top-ten-13kg-customers'
      );

      dispatch({
        type: TOP_TEN_13KG_CUSTOMERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOP_TEN_13KG_CUSTOMERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopTen25KGMonthlyCustomers =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: TOP_TEN_25KG_CUSTOMERS_REQUEST,
      });

      const { data } = await axios.get(
        '/api/v1/analytics/top-ten-25kg-customers'
      );

      dispatch({
        type: TOP_TEN_25KG_CUSTOMERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOP_TEN_25KG_CUSTOMERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopTen35KGMonthlyCustomers =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: TOP_TEN_35KG_CUSTOMERS_REQUEST,
      });

      const { data } = await axios.get(
        '/api/v1/analytics/top-ten-35kg-customers'
      );

      dispatch({
        type: TOP_TEN_35KG_CUSTOMERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOP_TEN_35KG_CUSTOMERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listTopTen50KGMonthlyCustomers =
  () => async (dispatch, getState) => {
    try {
      dispatch({
        type: TOP_TEN_50KG_CUSTOMERS_REQUEST,
      });

      const { data } = await axios.get(
        '/api/v1/analytics/top-ten-50kg-customers'
      );

      dispatch({
        type: TOP_TEN_50KG_CUSTOMERS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: TOP_TEN_50KG_CUSTOMERS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

//READ TOP CUSTOMERS OPERATION(Read-LIST)
export const listTopSoldGas = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: TOP_SOLD_GAS_REQUEST,
    });

    const { data } = await axios.get(
      '/api/v1/analytics/top-sold-gas-analytics'
    );

    dispatch({
      type: TOP_SOLD_GAS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TOP_SOLD_GAS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listGasOf3kgForRefill = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_FOR_3KG_REFILL_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/gas-of-3kg-refill');

    dispatch({
      type: GAS_FOR_3KG_REFILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_FOR_3KG_REFILL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listGasOf6kgForRefill = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_FOR_6KG_REFILL_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/gas-of-6kg-refill');

    dispatch({
      type: GAS_FOR_6KG_REFILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_FOR_6KG_REFILL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listGasOf13kgForRefill = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_FOR_13KG_REFILL_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/gas-of-13kg-refill');

    dispatch({
      type: GAS_FOR_13KG_REFILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_FOR_13KG_REFILL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listGasOf25kgForRefill = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_FOR_25KG_REFILL_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/gas-of-25kg-refill');

    dispatch({
      type: GAS_FOR_25KG_REFILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_FOR_25KG_REFILL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listGasOf35kgForRefill = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_FOR_35KG_REFILL_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/gas-of-35kg-refill');

    dispatch({
      type: GAS_FOR_35KG_REFILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_FOR_35KG_REFILL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listGasOf50kgForRefill = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_FOR_50KG_REFILL_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/gas-of-50kg-refill');

    dispatch({
      type: GAS_FOR_50KG_REFILL_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_FOR_50KG_REFILL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMonthly3kgRevenue = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_3KG_MONTH_REVENUE_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/3kg-month-revenue');

    dispatch({
      type: GAS_3KG_MONTH_REVENUE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_3KG_MONTH_REVENUE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMonthly6kgRevenue = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_6KG_MONTH_REVENUE_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/6kg-month-revenue');

    dispatch({
      type: GAS_6KG_MONTH_REVENUE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_6KG_MONTH_REVENUE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMonthly13kgRevenue = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_13KG_MONTH_REVENUE_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/13kg-month-revenue');

    dispatch({
      type: GAS_13KG_MONTH_REVENUE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_13KG_MONTH_REVENUE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMonthly25kgRevenue = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_25KG_MONTH_REVENUE_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/25kg-month-revenue');

    dispatch({
      type: GAS_25KG_MONTH_REVENUE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_25KG_MONTH_REVENUE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMonthly35kgRevenue = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_35KG_MONTH_REVENUE_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/35kg-month-revenue');

    dispatch({
      type: GAS_35KG_MONTH_REVENUE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_35KG_MONTH_REVENUE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listMonthly50kgRevenue = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GAS_50KG_MONTH_REVENUE_REQUEST,
    });

    const { data } = await axios.get('/api/v1/analytics/50kg-month-revenue');

    dispatch({
      type: GAS_50KG_MONTH_REVENUE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GAS_50KG_MONTH_REVENUE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
