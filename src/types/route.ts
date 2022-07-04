import { ReactNode } from "react"

export type TRoute = {
    path: string,
    element?: ReactNode
    children?:  TRoute[]
    userRole?: 'admin' | 'user', //если нужна валидация по роли
    name: string //опционально
}
