import { IsIn, IsNumberString, IsOptional, IsString } from 'class-validator';

export class QueryAllDTO {
  @IsNumberString()
  @IsOptional()
    page?: number;

  @IsNumberString()
  @IsOptional()
    pageSize?: number;

  @IsOptional()
  @IsString()
    search?: string;

  @IsOptional()
  @IsString()
    sort?: string;

  @IsIn(['asc', 'desc'], {
    message: 'Wrong value for order',
  })
  @IsOptional()
    order?: 'asc' | 'desc';
}

export class SearchDTO {
  search?: string;
}

export class PageDTO {
  page?: number;
  pageSize?: number;
}

export class Page {
  take: number;
  skip: number;
}

export class Search<T> {
  OR: {
    [k in keyof T]: {
      contains: string;
      mode: 'default' | 'insensitive';
    }
  }[];
}
