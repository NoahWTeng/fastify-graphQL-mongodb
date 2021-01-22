const { boomify } = require('@hapi/boom');

class PeopleServices {
  constructor({ PeopleModel }) {
    this.Model = PeopleModel;
  }

  async search() {
    try {
      const obtained = await this.Model.find();
      return obtained;
    } catch (e) {
      boomify(e);
    }
  }
  async get(id) {
    try {
      const obtained = await this.Model.findOne({ _id: id });
      return obtained;
    } catch (e) {
      boomify(e);
    }
  }

  async create(data) {
    try {
      const created = await this.Model.create(data);
      return created;
    } catch (e) {
      boomify(e);
    }
  }

  async delete(id) {
    try {
      const deleted = await this.Model.deleteOne({ _id: id });

      return { _id: id, deleted: deleted.n > 0 };
    } catch (e) {
      boomify(e);
    }
  }

  async update(id, data) {
    try {
      const updated = await this.Model.findOneAndUpdate(
        { _id: id },
        { $set: objectToDotNotation({ updatedAt: Date.now(), ...data }) },
        { new: true }
      ).catch((e) => {
        throw e;
      });

      return updated;
    } catch (e) {
      boomify(e);
    }
  }
}

module.exports = PeopleServices;
