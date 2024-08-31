import { Request, Response } from 'express';

export const listMeasures = async (req: Request, res: Response) => {
  const customer_code = req.params.customer_code;
  const measure_type = req.query.measure_type as string;

  try {
    return res.status(200).json({
      customer_code,
      measures: [
        // Exemplo fictício
        {
          measure_uuid: 'uuid1',
          measure_datetime: new Date().toISOString(),
          measure_type: 'WATER',
          has_confirmed: true,
          image_url: 'http://example.com/image.jpg'
        }
      ]
    });
  } catch (error) {
    return res.status(404).json({ error_code: 'MEASURES_NOT_FOUND', error_description: 'Nenhuma medição encontrada' });
  }
};
