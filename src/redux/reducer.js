const DEFAULT_STATE = {
  n: 0,
  board: []
};

export { DEFAULT_STATE };

export function reducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "INIT_STATE":
      let { n, boardString } = action.payload;
      let board1d = [...boardString].map(x => Number(x));
      let board2d = [];
      while (board1d.length) board2d.push(board1d.splice(0, n));
      return {
        ...state,
        n,
        board: board2d
      };
    case "FLIP_CASE":
      let { x, y } = action.payload;
      const token = state.board[x][y]
      state.board[x][y] = Number(token) === 1 ? 0 : 1;
      return {
        ...state,
      };
    case "PLAY":
      playSafe(state.board, action.payload.x, action.payload.y)
      playSafe(state.board, action.payload.x+1, action.payload.y)
      playSafe(state.board, action.payload.x-1, action.payload.y)
      playSafe(state.board, action.payload.x, action.payload.y+1)
      playSafe(state.board, action.payload.x, action.payload.y-1)
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}

function playSafe(board, x, y){
  try {
    let token = board[x][y]
    if (token === undefined) return;
    board[x][y] = token === 1 ? 0 : 1
  } catch (e) {

  }
}