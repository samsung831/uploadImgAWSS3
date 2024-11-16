import { ApiPropertyOptional } from "@nestjs/swagger";

export class ImageResponseDTO {
    @ApiPropertyOptional()
    ETag?: string;

    @ApiPropertyOptional()
    Location?: string; 

    @ApiPropertyOptional()
    key?: string;

    @ApiPropertyOptional()
    Key?: string;
    
    @ApiPropertyOptional()
    Bucket?: string;
} 