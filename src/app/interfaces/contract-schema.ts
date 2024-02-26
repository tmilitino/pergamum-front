export interface ContractSchema {
    id: number;
    name: string;
    schema: object;
    schema_version: string;
    create_at: Date;
    update_at: Date;
}
