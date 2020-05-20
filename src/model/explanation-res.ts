export class ExplanationRes {
  code: string
  constructor(partial: Partial<ExplanationRes>) {
    Object.assign(this, partial)
  }
}