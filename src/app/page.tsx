import Booking from "@/components/Booking/Booking";

export default function Home() {
  return (
    <main>
      <div className="grid md:grid-cols-3 grid-cols-1">
        <div>
          <Booking />
        </div>
        <div className="col-span-2">map</div>
      </div>
    </main>
  );
}
