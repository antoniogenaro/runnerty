var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  id : String,
  uId : String,
  parentUId : String,
  event: String,
  date: { type: Date, default: Date.now },
  name : String,
  exec : Object,
  args : Object,
  depends_process : Array,
  depends_process_alt : Array,
  retries : Number,
  retry_delay : Number,
  limited_time_end : Number,
  end_on_fail : Boolean,
  end_chain_on_fail : Boolean,
  command_executed : String,
  args_executed : String,
  retries_count : Number,
  output : Object,
  output_iterable : Object,
  custom_values : Object,
  output_share : Object,
  execute_return : Object,
  execute_err_return : String,
  started_at : Date,
  ended_at : Date,
  duration_seconds : Number,
  execute_db_fieldCount : Number,
  execute_db_affectedRows : Number,
  execute_db_changedRows : Number,
  execute_db_insertId : String,
  execute_db_warningCount : Number,
  execute_db_message : String
});

module.exports = mongoose.model("Process", schema);