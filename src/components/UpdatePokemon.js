import React from "react";

export function UpdatePokemon() {
  return (
    <div>
      <form
        onSubmit={(event) => {

            console.log('teste');

        }}
      >

        <div className="form-group">
          <input className="btn btn-primary" type="submit" value="Update" />
        </div>
      </form>
    </div>
  );
}
