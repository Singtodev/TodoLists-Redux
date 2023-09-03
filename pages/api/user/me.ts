// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User, UserAddress } from '@/types/model/user';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  user: User,
  accessToken: String,
  refreshToken: String
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const addresses: UserAddress[] = [
        {
          id: 1,
          street: "123 Main St",
          city: "Exampleville",
          state: "CA",
          postalCode: "12345",
          country: "USA"
        },
        {
          id: 2,
          street: "456 Elm St",
          city: "Sampletown",
          state: "NY",
          postalCode: "67890",
          country: "USA"
        },
      ];
      
      const user: User = {
        id: "1",
        username: "john_doe",
        email: "john@example.com",
        password: "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
        first_name: "John",
        last_name: "Doe",
        avatar_url: "https://example.com/avatar.jpg",
        points: 0,
        status: 'Active',
        email_verify: false,
        phones: [
            {
                id: 0,
                phone_number: '0825616378'
            }
        ],
        last_login: new Date("2023-09-04T12:00:00Z"),
        last_update: new Date("2023-09-04T12:00:00Z"),
        cart: [
          { productId: "product_1", quantity: 2 },
          { productId: "product_2", quantity: 1 }
        ],
        orders: [
          {
            orderId: "order_1",
            date: new Date("2023-09-04T12:00:00Z"),
            items: [
              { productId: "product_1", quantity: 2, price: 25.99 }
            ],
            total: 51.98,
            status: 'success'
          },
          {
            orderId: "order_2",
            date: new Date("2023-09-03T14:30:00Z"),
            items: [
              { productId: "product_2", quantity: 1, price: 19.99 },
              { productId: "product_3", quantity: 3, price: 12.99 }
            ],
            total: 64.96,
            status: 'success'
          }
        ],
        address: addresses,
        address_select_id: 1,
        vouchers: [
            {
                id: "1",
                name: "Voucher 1",
                price: 10.99,
              },
              {
                id: "2",
                name: "Voucher 2",
                price: 5.99,
              },
              {
                id: "3",
                name: "Voucher 3",
                price: 15.49,
              }
        ]
      };
      
      const obj = {
        user,
        accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMifQ.abcdefg1234567890hijklmnopqrstuvwxyz',
        refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMifQ.abcdefg1234567890hijklmnopqrstuvwxyz',
        expireIn: 3600
      }
      
  return res.status(200).json(obj)
}
