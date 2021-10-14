// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    meta: {
      message: 'success',
      code: 201,
    },
    data: JSON.parse(req.body),
  });
}
