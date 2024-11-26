import "./App.css";
// import 'sweetalert2/src/sweetalert2.scss'
import Swal from "sweetalert2";

function App() {
  
  const handelSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const coffee = formData.get("coffee");
    const quantity = formData.get("quantity");
    const supplier = formData.get("supplier");
    const taste = formData.get("taste");
    const category = formData.get("category");
    const details = formData.get("details");
    const photo = formData.get("photo");

    const newCoffee = {
      coffee,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Coffee Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      });
  };

  return (
    <>
      <h1 className="text-center underline underline-offset-4 pt-10 text-3xl font-bold">
        Add a coffee
      </h1>
      <div className="max-w-3xl mx-auto  my-12 border bg-[#F3F4F0] rounded-lg">
        <form onSubmit={handelSubmit} className="card-body">
          {/* from coffee row */}
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xs">Coffee Name</span>
              </label>
              <input
                name="coffee"
                placeholder="coffee name"
                className="w-full input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xs">Avilabel quantity</span>
              </label>
              <input
                name="quantity"
                placeholder="avilabel quantity"
                className="w-full input input-bordered"
              />
            </div>
          </div>
          {/* from supplier row */}
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xs">Supplier</span>
              </label>
              <input
                name="supplier"
                placeholder="Supplier"
                className="w-full input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xs">Taste</span>
              </label>
              <input
                name="taste"
                placeholder="Taste"
                className="w-full input input-bordered"
              />
            </div>
          </div>
          {/*form category row */}
          <div className="flex gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xs">category</span>
              </label>
              <input
                name="category"
                placeholder="category"
                className="w-full input input-bordered"
              />
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xs">Details</span>
              </label>
              <input
                name="details"
                placeholder="Details"
                className="w-full input input-bordered"
              />
            </div>
          </div>
          {/* from photo url */}
          <div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-xs">Photo Url</span>
              </label>
              <input
                name="photo"
                placeholder="photo"
                className="w-full input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Add Coffee"
              className="btn btn-block text-white bg-slate-900"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
