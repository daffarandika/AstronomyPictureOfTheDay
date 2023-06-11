import { CropSentencePipe } from './crop-sentence.pipe';

describe('CropSentencePipe', () => {
  it('create an instance', () => {
    const pipe = new CropSentencePipe();
    expect(pipe).toBeTruthy();
  });
});
