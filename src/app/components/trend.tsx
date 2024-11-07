import { dataAtualFormatada } from "./utils/utils";

export default function Trend(){
    const textDate = dataAtualFormatada();

    return(
        <div className="grid grid-cols-4 flex bg-gray-100 py-b-5 rounded-md">
        <div className="justify-self-end font-black text-center text-3xl py-5">
          Trending
          <div className="justify-self-end text-center text-sm font-light py-5">
            Most popular by community
          </div>
          <div className="h-56 grid grid-cols-2 gap-4 flex place-content-center align-items-start font-light text-sm">
            <div className="bg-white rounded-lg shadow-md">
              <div className="w-full bg-gray-50 p4 border-b border-gray-100">
                <h4 className="font-bold">Item Name</h4>
              </div>
              <div className="p-4">
                Short decription of the item goes nicely here.
              </div>
              <div>{textDate}</div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="w-full bg-gray-50 p4 border-b border-gray-100">
                <h4 className="font-bold">Item Name</h4>
              </div>
              <div className="p-4">
                Short decription of the item goes nicely here.
              </div>
              <div>{textDate}</div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="w-full bg-gray-50 p4 border-b border-gray-100">
                <h4 className="font-bold">Item Name</h4>
              </div>
              <div className="p-4">
                Short decription of the item goes nicely here.
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md">
              <div className="w-full bg-gray-50 p4 border-b border-gray-100">
                <h4 className="font-bold">Item Name</h4>
              </div>
              <div className="p-4">
                Short decription of the item goes nicely here.
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}