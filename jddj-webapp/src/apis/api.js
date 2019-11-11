// const BASEURL='http://106.13.135.215:3000'
// const CARTURL = `${BASEURL}/jddj/data`
export default {
    // /**
    //  * 获取店铺的信息
    //  */
    // async getCartInfoByUserId () {
    //     let res = await fetch(CARTURL)
    //     let data = await res.json()
    //     return data
    // },
    // home数据获取
    async getHomeData () {
        let res = await fetch('http://106.13.135.215:3000/jddj')
        // let res = await fetch('http://localhost:3000/jddj')
        let data = await res.json()
        return data
    },
    //classify数据获取
    async getGoodsData () {
        let res = await fetch('http://106.13.135.215:3000/jddj/data')
        // let res = await fetch('http://localhost:3000/jddj/data')
        let data = await res.json()
        return data
    },
    async getPersonalData () {
        let res = await fetch('http://106.13.135.215:3000/jddj/personal')
        // let res = await fetch('http://localhost:3000/jddj/personal')
        let data =await res.json()
        return data
    }
}