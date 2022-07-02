export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add' : IDL.Func([IDL.Nat], [], ['oneway']),
    'checkbalance' : IDL.Func([], [IDL.Nat], ['query']),
    'subtract' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
