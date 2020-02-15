const DEFAULT_STATE = {
  n: 0,
  board: []
};

export {DEFAULT_STATE};

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "INIT_STATE":
        let {n, boardString} = action.payload
        let board1d = [...boardString].map(x => Number(x))
        let board2d = []
        while(board1d.length) board2d.push(board1d.splice(0,n));
        return {
            ...state,
            n,
            board: board2d,
        }
    case "FLIP_CASE":
      let { x, y } = action.payload;
      const token = state.board[x][y]
      state.board[x][y] = Number(token) === 1 ? 0 : 1;
      return {
        ...state,
        board: state.board
      };
    default:
      return { ...state };
  }
}
