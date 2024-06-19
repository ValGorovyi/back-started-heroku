import { Request, Response } from "express";

export type dbType = {
    id: string
    superName: string
    category: 'man' | 'friend' | 'people' | 'kozel'
}

// export type RequestGetType<meaning> = Request<{}, {}, meaning>

export type RequestGetByAllCategory = {category: 'man' | 'friend' | 'people' | 'kozel'}

export type RequestGetByIdCategory = {id: string}

export type RequestPutByIdCategory = {id: string, category: string}

export type RequestPostToAll = {category: string}

export type RequestDeleteById = {id: string}