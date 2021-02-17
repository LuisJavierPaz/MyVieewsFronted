export interface ModelVideo {
  video: Video;
  externalIdCategoria: string;
  idCanal: number;
}

export interface Canal {
  idcan?: number;
  fotoPerfil?: string;
  fotoPortado?: string;
  nombreCanal?: string;
  strike?: number;
  reportes: number;
}

export interface Categoria {
  idcat?: number;
  nomcat?: string;
  externaId?: string;
}
export interface Video{
  externaId?: string;
  nombre?: string;
  descripcion?: string;
  fechaPublicacion?: Date;
  directorio?: string;
  visualizaciones?: number;
  gustar?: number;
  noGustar?: number;
  estadoVideo?: string;
  visibilidad?: string;
}
