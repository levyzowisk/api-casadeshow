const { prisma } = require("../../config/database");

async function create(userId, eventId, couponId,paymentMethod, items, priceTotal  ) {
    return await prisma.sale.create({
        data: {
          user_id: userId,
          event_id: eventId,
          coupon_id: couponId,
          sale_date: new Date(),
          price_total: priceTotal,
          payment_method: paymentMethod,
          status_payment: 'PAID', 
          ticket: {
            create: items.flatMap((item) =>
              Array(item.quantity)
                .fill()
                .map(() => ({
                  sector_id: item.sector_id,
                  code_qr: `qr_simulado_${new Date().getTime()}_${Math.random()}`,
                  status: 'SOLD',
                })),
            ),
        }},
        
    })
}

module.exports = {
    create
}