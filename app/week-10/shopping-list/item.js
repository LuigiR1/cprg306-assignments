export default function Item({ name, quantity, category, onSelect }) {
    return (
        <li 
            className="bg-orange-300 mb-3 flex flex-col justify-between p-4 border-l border-t border-4 border-orange-600"
            onClick={() => onSelect && onSelect({ name, quantity, category })}
        >
            <div className="font-semibold text-lg text-gray-900">{name}</div>
            <div className="text-gray-600">Buy {quantity} in {category}</div>
        </li>
    );
}
