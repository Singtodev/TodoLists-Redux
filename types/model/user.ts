export interface User {
    id: string,
    username: string,
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    avatar_url: string,
    points: number,
    cart: UserCartItem[],
    orders: UserOrder[],
    address: UserAddress[];
    address_select_id: number,
    vouchers: UserVoucher[],
    last_login: Date | string,
    last_update: Date | string,
    status: String,
    email_verify: boolean,
    phones: UserPhone[]
}

export interface UserPhone {
    id: number,
    phone_number: String
}

export interface UserCartItem {
    productId: string,
    quantity: number
}

export interface UserOrder {
    orderId: string,
    date: Date | string,
    items: UserOrderItem[],
    total: number,
    status: string
}

export interface UserOrderItem {
    productId: string,
    quantity: number,
    price: number
}

export interface UserAddress {
    id: number,
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
}

export interface UserVoucher {
    id: string,
    name: string,
    price: number,
}

