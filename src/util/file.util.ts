import * as fs from 'fs';

export class FileUtil {
  private static readonly TEMPLATE_DIR = 'template';
  private static readonly IMAGE_DIR = 'template/images';

  static readTemplateBuffer(templateName: string): Buffer {
    return this.fsReadFile(this.TEMPLATE_DIR, templateName);
  }

  static getBase64Image(fileName: string) {
    const image = this.fsReadFile(this.IMAGE_DIR, fileName);
    const base64Image = Buffer.from(image).toString('base64');
    return 'data:image/jpeg;base64,' + base64Image;
  }

  private static fsReadFile(directory: string, fileName: string): Buffer {
    return fs.readFileSync(`${process.cwd()}/${directory}/${fileName}`);
  }
}
