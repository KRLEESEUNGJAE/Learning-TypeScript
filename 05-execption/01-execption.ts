// Java: Exception
// JavaScript: Error
// const arr = new Array(9999999999999999999);

// Error(Exception) Handling: try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  console.log('closed!');
}

function run() {
  const fileName = 'not exist!';

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log('catched!');
  } finally {
    closeFile(fileName);
    console.log('ok!');
  }
}

run();
