import { useEffect, useRef } from "react";
import "./InfiniteScroll.css";

function InfiniteScroll() {
  const ulRef = useRef();
  const items = ['Developer']; // حتى لو عنصر واحد

  useEffect(() => {
    const ul = ulRef.current;
    const originalItems = [...ul.children];

    // تكرار العناصر مرتين على الأقل عشان الحركة سلسة
    for (let i = 0; i < 100; i++) {
      originalItems.forEach(item => {
        const clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        ul.appendChild(clone);
      });
    }
  }, []);

  return (
    <div className="scroll-container">
      <ul className="scroll-list" ref={ulRef}>
        {items.map((item, idx) => (
          <li key={idx} className="scroll-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default InfiniteScroll;