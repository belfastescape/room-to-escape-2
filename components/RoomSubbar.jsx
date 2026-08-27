import Link from "next/link";

export default function RoomSubbar({ name, slug }) {
  return (
    <div className="room-subbar">
      <div className="container inner">
        <span className="name">{name}</span>
        <span className="p">$29.95 / person · 60 min</span>
        <Link className="btn btn-primary btn-sm" href={`/book-a-game.html?room=${slug}`}>
          Book Now
        </Link>
      </div>
    </div>
  );
}
