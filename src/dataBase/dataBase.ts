export type dbType = {
    id: string
    superName: string
    category: 'man' | 'friend' | 'people' | 'kozel'
}

export var db: dbType[] = [
    {id:'1', superName: 'Separ', category: 'friend'},
    {id:'2', superName: 'Paravoz', category: 'friend'},
    {id:'3', superName: 'Bumer', category: 'man'},
    {id: '953', superName: 'Nasta', category: 'kozel'}
]