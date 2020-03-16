const router = require('koa-router')()

router.prefix('/display')

router.get('/hex_clock', async (ctx, next) => {
    await ctx.render('display/hex_clock')
})

router.get('/overwatch-league-logo', async (ctx, next) => {
    await ctx.render('display/overwatch-league-logo')
})

module.exports = router