export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.typeName(name);
    this._length = this.typeLength(length);
    this._students = this.typeStudents(students);
  }

  typeName(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    return name;
  }
  typeLength(length) {
    if (typeof length !== "number") {
      throw new TypeError("Length must be a number");
    }
    return length;
  }
  typeStudents(students) {
    if (
      !Array.isArray(students) ||
      !students.every((student) => typeof student === "string")
    ) {
      throw new TypeError("Students must be an array of strings");
    }
    return students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.typeName(newName);
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.typeName(newLength);
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._length = this.typeName(newStudents);
  }
}
