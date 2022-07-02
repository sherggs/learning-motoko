import Debug "mo:base/Debug";

actor Dbank{
  var currentvalue = 300;
  currentvalue := 100;

  let name = 120;

  public func subtract(amount: Nat){
    let tempvalue : Int = currentvalue - amount;
    if (tempvalue >= 0){
          currentvalue -= amount;
      Debug.print(debug_show(currentvalue));
    }
    else {
      Debug.print("use a number less than current value")
    };
  };
  public func add(amount: Nat){
    currentvalue += amount;
      Debug.print(debug_show(currentvalue));
};

public query func checkbalance() : async Nat {

  return currentvalue;
};

}