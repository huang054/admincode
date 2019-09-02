package com.stylefeng.guns.modular.system.model;

import com.baomidou.mybatisplus.activerecord.Model;
import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.enums.IdType;
import lombok.Data;


import java.io.Serializable;

/**
 * <p>
 * 字典表
 * </p>
 *
 * @author stylefeng
 * @since 2017-07-11
 */
@TableName("sys_dict")
@Data
public class Dict extends Model<Dict> {

	private static final long serialVersionUID = 1L;

	/**
	 * 主键id
	 */
	@TableId(value="id", type= IdType.AUTO)
	private Integer id;
	/**
	 * 排序
	 */
	private Integer num;
	/**
	 * 父级字典
	 */
	private Integer pid;
	/**
	 * 名称
	 */
	private String name;

	/**
	 * 编码
	 */
	private String code;
	/**
	 * 提示
	 */
	private String tips;


	@Override
	protected Serializable pkVal() {
		return this.id;
	}

}
