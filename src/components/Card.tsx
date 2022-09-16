import { data } from "../helpers/client";

interface Data {
  id: string,
  date: string,
  title: string,
  quantity: number,
  description: string,
  image_url: string
}

export default function Card() {
  return (
    <div className="card grid grid-cols-3">
      {data && data.map((item:Data) => (
        <div data-theme="valentine" className="card card-compact w-96 bg-base-300 shadow-xl">
          <figure><img src={item.image_url} alt={item.title}/></figure>
          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <p>{item.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}