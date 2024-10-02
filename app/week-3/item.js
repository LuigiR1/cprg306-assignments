export default function Item({name, quantity, category}) {

    return (
        <li className="flex flex-col justify-between p-4 border-b border-gray-200">
            <div className="font-semibold text-lg text-gray-900">{name}</div>
            <div className="text-gray-600">Buy {quantity} in {category}</div>
        </li>

    );
}