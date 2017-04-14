export class Launch {
  constructor(
    public id: number,
    public division: string,
    public project: string,
    public clientApproval: Date,
    public launchDate: Date,
    public visible: boolean
  ) {}
}
