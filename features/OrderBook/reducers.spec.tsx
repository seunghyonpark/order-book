import reducer, { initialState } from "./reducers";
import { patchLevels, switchProductId } from "./reducers";
import { State } from "./types";

const createMutableState = (partials: Partial<State> = {}) => ({
  ...initialState,
  ...partials,
});

describe("In the OrderBook reducers", () => {
  describe("The patchLevels reducer", () => {
    it("should add initial levels", () => {
      const state = createMutableState();

      expect(
        reducer(
          state,
          patchLevels({
            bids: [[1000, 100]],
            asks: [[2000, 200]],
          })
        )
      ).toStrictEqual({
        ...state,
        bids: { 1000: 100 },
        asks: { 2000: 200 },
      });
    });

    it("should add more levels", () => {
      const state = createMutableState({
        bids: { 1000: 100 },
        asks: { 2000: 200 },
      });

      expect(
        reducer(
          state,
          patchLevels({
            bids: [[3000, 300]],
            asks: [[4000, 400]],
          })
        )
      ).toStrictEqual({
        ...state,
        bids: { 1000: 100, 3000: 300 },
        asks: { 2000: 200, 4000: 400 },
      });
    });

    it("should update levels", () => {
      const state = createMutableState({
        bids: { 1000: 100 },
        asks: { 2000: 200 },
      });

      expect(
        reducer(
          state,
          patchLevels({
            bids: [[1000, 150]],
            asks: [[2000, 250]],
          })
        )
      ).toStrictEqual({
        ...state,
        bids: { 1000: 150 },
        asks: { 2000: 250 },
      });
    });

    it("should remove levels when it's size is 0", () => {
      const state = createMutableState({
        bids: { 1000: 100 },
        asks: { 2000: 200 },
      });

      expect(
        reducer(
          state,
          patchLevels({
            bids: [[1000, 0]],
            asks: [[2000, 0]],
          })
        )
      ).toStrictEqual({
        ...state,
        bids: {},
        asks: {},
      });
    });

    it("should not remove levels when they are omitted", () => {
      const state = createMutableState({
        bids: { 1000: 100 },
        asks: { 2000: 200 },
      });

      expect(
        reducer(
          state,
          patchLevels({
            bids: [],
            asks: [],
          })
        )
      ).toStrictEqual({
        ...state,
        bids: { 1000: 100 },
        asks: { 2000: 200 },
      });
    });
  });

  describe("The switchProductId reducer", () => {
    it("should switch from PI_XBTUSD to PI_ETHUSD", () => {
      const state = createMutableState({
        productId: "PI_XBTUSD",
      });

      expect(reducer(state, switchProductId())).toStrictEqual({
        ...state,
        productId: "PI_ETHUSD",
      });
    });

    it("should switch from PI_ETHUSD to PI_XBTUSD", () => {
      const state = createMutableState({
        productId: "PI_ETHUSD",
      });

      expect(reducer(state, switchProductId())).toStrictEqual({
        ...state,
        productId: "PI_XBTUSD",
      });
    });

    it("should erase bids and asks", () => {
      const state = createMutableState({
        bids: { 1000: 100 },
        asks: { 2000: 200 },
        productId: "PI_XBTUSD",
      });

      expect(reducer(state, switchProductId())).toStrictEqual({
        ...state,
        bids: {},
        asks: {},
        productId: "PI_ETHUSD",
      });
    });
  });
});
