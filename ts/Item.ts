import * as fs from 'fs'
import * as path from 'path'
import * as request from 'request'

export interface Item {
    icon: string
    path: string
    name: string
    size: number
    mtime: number
    sel: boolean
}