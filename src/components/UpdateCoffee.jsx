import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {


  const coffees = useLoaderData();
  const { _id, quantity, taste, photo, details, category, supplier, coffee } =
    coffees;

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

    const UpdateCoffee = {
      coffee,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };


    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee UpDated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <h1 className="text-center underline underline-offset-4 pt-10 text-3xl font-bold">
        Update coffee
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
                defaultValue={coffee}
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
                defaultValue={quantity}
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
                defaultValue={supplier}
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
                defaultValue={taste}
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
                defaultValue={category}
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
                defaultValue={details}
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
                defaultValue={photo}
                name="photo"
                placeholder="photo"
                className="w-full input input-bordered"
              />
            </div>
          </div>

          <div className="form-control mt-6">
            <input
              type="submit"
              value="Update Coffee"
              className="btn btn-block text-white bg-slate-900"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
