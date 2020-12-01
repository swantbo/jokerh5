// TypeScript的核心原则之一是对值所具有的结构进行类型检查
// 在TypeScript中，接口的作用就是为这些类型命名和为我们的代码定义契约
// RootState定义为根state，被vuex中的state使用
// 在这里定义所有要使用的state
// 可通过接口扩展
export interface Counter {
  count: number,
  history: string[]
}

export interface IProduct {
  id: number,
  title: string,
  price: number,
  inventory: number
  quantity?: number
}

export interface Products {
  all: IProduct[]
}

export interface Cart {
  items: IProduct[],
  checkoutStatus: string | null
}

export interface RootState {
  counter: Counter,
  cart: Cart
}