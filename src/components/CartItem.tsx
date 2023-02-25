import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/shoppingCartContext"
import StoreItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency"

type cartItemProps = { // for every func that takes values, there should be type written
    id: number
    quantity: number
} 

export function CartItem({ id, quantity }: cartItemProps) {

    const { removeFromCart } = useShoppingCart() // function from provider

    const item = StoreItems.find(i => i.id === id) // data from data file 
    if (item == null) return null 
    


    return ( 
        // Stack is vertical without direction set
        // me = margin-lefr+margin-right 

        <Stack direction="horizontal" gap={2} className="d-flex align-items-center"> 

            <img src={item.imgUrl}
                style={{ width: '125px', height: '75px', objectFit: 'cover' }} alt="cartImg" 
            />

            <div className="me-auto"> 
                <div>
                    {item.name}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>

            <div>{formatCurrency(item.price * quantity)}</div>

            <Button variant="outline-danger" size='sm'
                onClick={() => removeFromCart(item.id)}>&times;
            </Button>

        </Stack>
    )
}
// all the infortation is stored in 'item' variable if there is any data with that id

// Inside of the cart there are things located in line (horizontaly)
// 1) imhURl that is taken from data file
// 2) Name (quantity) and price 
// 3) total price for one item if there is many of one 
// 4) cancel button


