import { Request, Response } from 'express';
import axios from 'axios';

export const uploadImage = async (req: Request, res: Response) => {
  const { image, customer_code, measure_datetime, measure_type } = req.body;

  if (!image || !customer_code || !measure_datetime || !measure_type) {
    return res.status(400).json({ error_code: 'INVALID_DATA', error_description: 'Dados faltando' });
  }

  const validMeasureTypes = ['WATER', 'GAS'];
  if (!validMeasureTypes.includes(measure_type.toUpperCase())) {
    return res.status(400).json({ error_code: 'INVALID_TYPE', error_description: 'Tipo de medição não permitido' });
  }

  // Verificar duplicidade e integrar com API de LLM (exemplo fictício)
  try {
    // Supondo integração fictícia
    const response = await axios.post('http://localhost:3000/api/upload', { image, measure_type });
    const { image_url, measure_uuid, measure_value } = response.data;

    // Retorno de sucesso
    return res.status(200).json({ image_url, measure_value, measure_uuid });
  } catch (error) {
    return res.status(500).json({ error_code: 'INTERNAL_ERROR', error_description: 'Erro ao processar a imagem' });
  }
};
