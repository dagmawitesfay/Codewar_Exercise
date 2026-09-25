Object.defineProperty( String.prototype, "eqAll", { value: function eqAll() {
  const arr = this.split("")
  return arr.every(str=>str===arr[0])
} } );

Object.defineProperty( Array.prototype, "eqAll", { value: function eqAll() {
    return this.every(num=>num===this[0])
} } );
